class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :name, :email, :dob, :user_name, :location, :gender, presence: true 
  validates :email, :user_name, uniqueness: true 
  validates :password, confirmation: true 
end
