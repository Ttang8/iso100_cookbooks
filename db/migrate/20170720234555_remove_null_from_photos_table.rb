class RemoveNullFromPhotosTable < ActiveRecord::Migration[5.1]
  def change
    change_column_null :photos, :description, true
  end
end
