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

class QuestionLike

  def self.all
    question_likes = QuestionsDatabase.instance.execute('SELECT * FROM question_likes')
    question_likes.map { |question_like| QuestionLike.new(question_like) }
    # p question_likes
  end

  def self.find_by_id(id)
    question_like_row = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        question_likes
      WHERE
        id = ?
    SQL

    QuestionLike.new(question_like_row.first) #techinically, only row in the array
  end

  def initialize(options)
    @id = options['id']
    @question_id = options['question_id']
    @liked = options['liked']
    @user_id = options['user_id']
  end

  def create
    raise "#{self} is already in database" if @id

    QuestionsDatabase.instance.execute(<<-SQL, @question_id, @liked, @user_id)
      INSERT INTO
        question_likes (question_id, liked, user_id)
      VALUES
        (?, ?, ?, ?)
    SQL
    @id = QuestionsDatabase.instance.last_insert_row_id
  end


end
