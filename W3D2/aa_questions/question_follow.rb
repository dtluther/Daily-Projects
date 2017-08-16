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

class QuestionFollow

  def self.all
    question_follows = QuestionsDatabase.instance.execute('SELECT * FROM question_follows')
    question_follows.map { |question_follow| QuestionFollow.new(question_follow) }
    # p question_follows
  end

  def self.find_by_id(id)
    question_follow_row = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        question_follows
      WHERE
        id = ?
    SQL

    QuestionFollow.new(question_follow_row.first) #techinically, only row in the array
  end

  def self.followers_for_question(question_id)
    followers_arr = QuestionsDatabase.instance.execute(<<-SQL, question_id)
    SELECT
      *
    FROM
      question_follows
    JOIN
      users ON users.id = question_follows.follower_id
    WHERE
      question_follows.question_id = ?
    SQL

    followers_arr.map { |follower| QuestionFollow.new(follower) }
  end

  def initialize(options)
    @id = options['id']
    @follower_id = options['follower_id']
    @question_id = options['question_id']
  end

  def create
    raise "#{self} is already in database" if @id

    QuestionsDatabase.instance.execute(<<-SQL, @follower_id, @question_id)
      INSERT INTO
        question_follows (follower_id, question_id)
      VALUES
        (?, ?)
    SQL
    @id = QuestionsDatabase.instance.last_insert_row_id
  end


end
