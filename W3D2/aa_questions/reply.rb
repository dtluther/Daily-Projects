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

class Reply

  def self.all
    replies = QuestionsDatabase.instance.execute('SELECT * FROM replies')
    replies.map { |reply| Reply.new(reply) }
    # p replies
  end

  def self.find_by_id(id)
    replies_row = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        replies
      WHERE
        id = ?
    SQL

    Reply.new(replies_row.first) #techinically, only row in the array
  end

  def initialize(options)
    @id = options['id']
    @user_id = options['user_id']
    @body = options['body']
    @question_id = options['question_id']
    @parent_reply_id = options['parent_reply_id']
  end

  def create
    raise "#{self} is already in database" if @id

    QuestionsDatabase.instance.execute(<<-SQL, @user_id, @body, question_id, parent_reply_id)
      INSERT INTO
        replies (user_id, body, question_id, parent_reply_id)
      VALUES
        (?, ?, ?, ?)
    SQL
    @id = QuestionsDatabase.instance.last_insert_row_id
  end


end
