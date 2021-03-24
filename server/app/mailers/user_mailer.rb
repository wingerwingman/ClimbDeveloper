class UserMailer < Devise::Mailer
    # default from: "<#{ENV['DEFAULT_FROM_EMAIL']}>" // I am using figaro to store environment variables so I am accessing email from the application.yml file with this code
    before_action :add_inline_attachments!
   
    def reset_password_instructions(record, token, opts={})
      super
    end
   
    private
    def add_inline_attachments!
      attachments.inline['your-logo.png'] = File.read(Rails.root.join('app/assets/images/your-logo.png'))
    end
   end