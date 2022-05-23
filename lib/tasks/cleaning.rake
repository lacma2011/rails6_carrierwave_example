namespace :cleaning do
  desc "TODO"
  task clear_uploads_folder: :environment do
    FileUtils.rm_rf(Dir.glob('public/uploads/*'))
  end

end
