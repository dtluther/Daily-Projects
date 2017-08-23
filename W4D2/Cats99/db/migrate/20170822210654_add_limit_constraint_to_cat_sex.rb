class AddLimitConstraintToCatSex < ActiveRecord::Migration[5.1]
  def change
    change_column :cats, :sex, :string, null: false, limit: 1 
  end
end
