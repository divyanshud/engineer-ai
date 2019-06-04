class CreateSecretCodes < ActiveRecord::Migration[5.0]
  def change
    create_table :secret_codes do |t|
      t.string :coded_value
      t.references :user
      t.timestamps
    end
    add_index :secret_codes, :coded_value, unique: true
  end
end
