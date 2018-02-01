* modules usage
    * namespacing

* Code organization
* Multiple rails app communications on a single server, how to centralize that code?
* How to benchmark something
* SSH
* Timing function for controller
* create
* create bang
* Write create function
* ActiveRecord lifecycles
* Blocks, Procs, and Lambdas
* What does fail loudly mean?
* What does a model or controller inherit from in Rails? What is the module and class doing that it inherits from?
* How to create your own gem?
* Headless request from the backend?

* Helper method in the context of rails

### Blocks, Procs, and Lambdas
##### Thanks to the following resources:
http://www.rubyguides.com/2016/02/ruby-procs-and-lambdas/

#### Blocks
* A Ruby block is an anonymous function that can be passed into a method.
* Blocks are enclosed between brackets or in a `do / end` statement (as we see in enumerables, like `each`):
    ```
    # Bracket form recommended for single-line blocks
    [1, 2, 3].each { |num| puts num }
                      ^^^     ^^^
                     block   block
                     args    body

    # `do / end` statement recommended for multi-line blocks
    [1, 2, 3].each do |num|
        puts num
    end
    ```
* In order to use a method with a block, we can use the `yield` keyword, which will allow code inside a passed in block to be executed:
    ```
    def execute_block_once
        yield
    end

    execute_block_once { puts "The code inside the block is being run." }

    # OUTPUT:
    # The code inside the block is being run.
    ```

* If we have a `yield` and don't pass in a block, we get a `no block given` error:
    ```
    def forgot_the_block
        yield
    end

    forgot_the_block
    # LocalJumpError: no block given (yield)
    ```
    
* `yield` can be used multiple times:
    ```
    def execute_block_twice
        yield
        yield
    end

    execute_block_twice { puts "I printed" }
    # I printed
    # I printed
    ```

* `yield` can also be used with any number of arguments:
    ```
    def print_numbers
        yield 1
        yield 2
        yield 3
    end

    print_numbers { |num| puts num * 10 }

    # OUTPUT:
    # 10
    # 20
    # 30
    ```

* Blocks can also be explicit instead of explicit, that is we can name blocks and pass them into methods or save them as variables:
    ```
    def explicit_block(&block)
        block.call # same as yield, but it will throw an undefined method error if we don't passs in a block
    end

    explicit_block { puts "Explicit block called" }
    # Explicit block called

    explicit_block
    # NoMethodError: undefined method `call` for nil:NilClass
    ```
* We can check if a block as been passed with the `block_given?` method:
    ```
    def block_with_safety
        return "No block given" unless block_given?
        yield
    end

    block_with_safety
    # => "No block given"
    ```

#### Lambdas vs. Procs
* Lambdas and Procs are used for storing blocks. In Ruby, there is no `Lambda` class; a lambda is just a special proc object, as shown by one of the isntance methods: `Proc.lambda?`.

* Lambdas:
    * Defining a lambda won't execute the code inside it, similar to defining a method. We need to use the `call` method to execute a lambda, as the following syntax demonstrates:
        ```
        lambda = -> { puts "I'm a lambda" }
        lambda.call
        # I'm a lambda
        ```
        * Alternative syntax: `lambda` instead of `->`

    * Some alternative ways to `call` a lambda:
        * `lambda.()`
        * `lambda[]`
        * `lambda.===`
    
    * Lambdas can also take arguments:
        ```
        double = ->(x) { x * 2 }
        double.call(10)
        # 20
        ```

    * If we pass the incorrect number of args to a lambda, it will raise an exception, just like a method:
        ```
        cannot_count = ->(x) { puts x }
        cannot_count
        # ArgumentError: wrong number of arguments (given 0, expected 1)
        ```
        * This behavior is **fundamentally different** from a proc's behavior.

* Procs:
    * Defined similarly (just require initializing a `Proc` object), but procs ***do not care*** whether or not they receive the correct number of arguments:
        ```
        my_first_proc = Proc.new { |x, y| puts "I don't care about arguments!" }

        my_first_proc.call
        # I don't care about arguments!
        
        my_first_proc.call(1, 2, 3)
        # I don't care about arguments!
        ```
        Another example:
        ```
        num_friends = Proc.new { |num| puts "I have #{num} friends." }

        num_friends.call
        # I have  friends.

        num_friends.call(10, 20)
        # I have 10 friends.
        ```
    * Another key difference between procs and lambdas is how they execute `return` statements. Lambdas return normally like a method. However, procs always try to return from the current context. Let's try to clarify with an example:
        ```
        my_lambda = -> { return 1 }
        puts "Lambda result: #{my_lambda.call}"
        # Lambda result: 1

        my_proc = Proc.new { return 1 }
        puts " Proc result: #{my_proc.call}"
        # LocalJumpError: unexpected return
        ```
        * The exception is raised because you can't execute a return while in the middle of a string (you can return a value and include it in a string, but executing a return in the middle of a string breaks it, as shown above).
        * Since a proc returns from wherever it is called, calling a proc that has a `return` inside a method will return from the method (and thereby exit the method):
        ```
        def call_proc
            puts "Before proc"
            my_proc = Proc.new { return 1 }
            my_proc.call
            puts "After proc"
        end

        call_proc
        # Before proc
        # => 1
        ```
        * The second `puts` statement never gets executed because the proc already returned from the method.

* In summary, some key differenes:
    1) Lambdas are defined with `-> {}`, procs are defined with `Proc.new {}`.
    2) Lambdas return from the lambda itself, procs return from their current context (the current method in which they are called).
    3) Lambdas will raise exceptions if given incorrect number of args, procs do not care.

* Other weird things:
    * **Closures**: a Ruby proc captures the current execution scope with it.
        * So while it returns from the context where it was executed, it will maintain knowledge of the local variables and methods from the scope of where it was defined:
            ```
            def call_proc(my_proc)
                count = 500
                my_proc.call
            end

            count = 1
            my_proc = Proc.new { puts count }

            call_proc(my_proc)
            # 1
            ```
            * The proc remembers the local count variable and takes that scope into the method where it's called.
    * The `Binding` class: