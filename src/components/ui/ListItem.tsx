import type { NavList } from "../types/navlisttype";

function ListItem({
  items,
  key,
  className,
}: {
  key: number;
  items: NavList;
  className?: string;
}) {
  return (
    <li className={className} key={key}>
      {items.title}
    </li>
  );
}

export default ListItem;
