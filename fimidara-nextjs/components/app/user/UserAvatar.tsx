import { UserOutlined } from "@ant-design/icons";
import AppAvatar from "../../utils/AppAvatar";

export interface IUserAvatarProps {
  userId: string;
  alt: string;
  className?: string;
  shape?: "rounded" | "square";
}

export default function UserAvatar(props: IUserAvatarProps) {
  const { className, shape } = props;

  return (
    <AppAvatar
      fallback={<UserOutlined />}
      // filepath={
      //   props.userId
      //     ? systemConstants.userImagesFolder + "/" + props.userId
      //     : undefined
      // }
      alt={props.alt}
      className={className}
      shape={shape}
    />
  );
}
