require_relative 'require'
require 'sqlite3'
require 'singleton'

class QuestionsDatabase < SQLite3::Database
  include Singleton

  def initialize
    super('questions.db')
    self.type_translation = true
    self.results_as_hash = true
  end
end

class User

  def self.all
    users = QuestionsDatabase.instance.execute('SELECT * FROM users')
    users.map { |user| User.new(user) }
    # p users
  end

  def self.find_by_id(id)
    user_row = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        users
      WHERE
        id = ?
    SQL

    User.new(user_row.first) #techinically, only row in the array
  end

  def self.find_by_name(fname, lname)
    attrs = {fname: fname, lname: lname}
    user_row = QuestionsDatabase.instance.execute(<<-SQL, attrs)
      SELECT
        *
      FROM
        users
      WHERE
        users.fname = :fname AND users.lname = :lname
    SQL

    User.new(user_row.first) #techinically, only row in the array
  end

  attr_reader :id
  attr_accessor :fname, :lname

  def initialize(options)
    @id = options['id']
    @fname = options['fname']
    @lname = options['lname']
  end

  def create
    raise "#{self} is already in database" if @id

    QuestionsDatabase.instance.execute(<<-SQL, @fname, @lname)
      INSERT INTO
        users (fname, lname)
      VALUES
        (?, ?)
    SQL
    @id = QuestionsDatabase.instance.last_insert_row_id
  end

  def authored_questions
    Question.find_by_author_id(@id)
  end
end
