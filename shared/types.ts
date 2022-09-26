export interface NotificationItem {
  id: string;
  from: User;
  to: string;
  content: string;
  dateCreated: Date | string;
  isNew?: boolean;
  reference?: Post;
  message?: string;
}

export interface User {
  id: string;
  name: string;
  avatar_url: string;
}

export interface Post {
  id: string;
  title: string;
  link: string;
  image_url?: string;
}
