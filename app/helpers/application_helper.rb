module ApplicationHelper
  def title(page_title)
    content_for :title, page_title.to_s
  end

  def avatar_url()
    gravatar_id = Digest::MD5::hexdigest('isaaczoi@gmail.com').downcase
    "http://gravatar.com/avatar/#{gravatar_id}.png"
  end
end
