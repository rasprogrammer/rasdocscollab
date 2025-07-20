import DocOptions from "@/components/Doc/DocOptions";
import ProfileBox from "@/components/ProfileBox";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-5">
      <DocOptions />
      <ProfileBox />
    </div>
  );
}
