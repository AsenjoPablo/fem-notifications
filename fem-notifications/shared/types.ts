export interface NotificationItem {
  id: string;
  from: User;
  to: string;
  content: string;
  isNew?: boolean;
  reference?: Reference;
  message?: string;
}

export interface Reference {
  text: string;
  link: string;
}

export interface User {
  id: string;
  name: string;
  avatar_url: string;
}
