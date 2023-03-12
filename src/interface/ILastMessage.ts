interface ILastMessage {
  created_at: number;
  message: string;
  user_id: string;
  user_name: string;
  user_surname: string;
  you: boolean;
}

export type { ILastMessage };
