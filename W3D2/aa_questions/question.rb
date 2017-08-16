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

class Question

  def self.all
    questions = QuestionsDatabase.instance.execute('SELECT * FROM questions')
    questions.map { |question| Question.new(question) }
    # p questions
  end

  def self.find_by_id(id)
    question_row = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        questions
      WHERE
        id = ?
    SQL

    Question.new(question_row.first) #techinically, only row in the array
  end

  attr_reader :id
  attr_accessor :title, :body, :author_id

  def initialize(options)
    @id = options['id']
    @title = options['title']
    @body = options['body']
    @author_id = options['author_id']
  end

  def create
    raise "#{self} is already in database" if @id

    QuestionsDatabase.instance.execute(<<-SQL, @title, @body, @author_id)
      INSERT INTO
        questions (title, body, author_id)
      VALUES
        (?, ?, ?)
    SQL
    @id = QuestionsDatabase.instance.last_insert_row_id
  end

  def self.find_by_author_id(author_id)
    question_row = QuestionsDatabase.instance.execute(<<-SQL, author_id)
      SELECT
        *
      FROM
        questions
      WHERE
        author_id = ?
    SQL

    Question.new(question_row.first)
  end

  def self.find_by_id(id)
    question_row = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        questions
      WHERE
        id = ?
    SQL

    Question.new(question_row.first) #techinically, only row in the array
  end

  def author
    User.find_by_id(@author_id)
  end

end
