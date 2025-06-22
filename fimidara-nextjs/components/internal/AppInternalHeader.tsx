import { kAppInternalPaths } from "@/lib/definitions/paths/internal.ts";
import { usePathname, useRouter } from "next/navigation";
import { FiUserPlus, FiUsers } from "react-icons/fi";
import { MdOutlineWorkOutline } from "react-icons/md";
import AppTabs, { AppTabItem } from "../utils/page/AppTabs";

export interface IAppInternalHeaderProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function AppInternalHeader(props: IAppInternalHeaderProps) {
  const { className, style } = props;
  const router = useRouter();
  const p = usePathname();

  const onChange = (key: string) => {
    router.push(key);
  };

  const items: AppTabItem[] = [
    {
      key: kAppInternalPaths.waitlist,
      label: `Waitlist`,
      icon: <FiUserPlus />,
    },
    {
      key: kAppInternalPaths.users,
      label: `Users`,
      icon: <FiUsers />,
    },
    {
      key: kAppInternalPaths.workspaces,
      label: `Workspaces`,
      icon: <MdOutlineWorkOutline />,
    },
  ];
  const activeKey = getTabActiveKeyUsingBasePath(p);
  return (
    <AppTabs
      activeKey={activeKey}
      items={items}
      onChange={onChange}
      style={style}
      className={className}
      activeKeyClassName="border-b border-primary"
      itemClassName="relative top-0.5 border-b border-border"
    />
  );
}

function getTabActiveKeyUsingBasePath(pathname?: string | null) {
  if (!pathname) {
    return undefined;
  }

  const i = pathname.indexOf("/", 1);
  return i === -1 ? pathname.slice(0) : pathname.slice(0, i);
}
