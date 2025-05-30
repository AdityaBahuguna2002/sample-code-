"use client";

import {
  LayoutDashboard,
  Pencil,
  Folder,
  User,
  Settings,
  LogOut,
  ChevronLeft,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/authContext";
import { logoutUser } from "@/lib/api/admin/authApi";

const postTypes = ["blog-post", "case-study", "news", "whitepaper"];
const postActions = [
  { label: "All Posts", value: "allItem", icon: Folder },
  { label: "Add Post", value: "addItem", icon: Pencil },
  { label: "Categories", value: "category", icon: Folder },
];

const userMenu = [
  { label: "Profile", href: "/admin/User/profile", icon: User },
  { label: "Settings", href: "/admin/User/settings", icon: Settings },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const { auth } = useAuth();

  const handleLogout = async () => {
    await logoutUser();
    router.push("/admin");
  };

  return (
    <aside
      className={`h-screen  bg-background border-r transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b">
        {!collapsed && <>
          <img
            src="https://cynoteck.com/wp-content/uploads/2025/04/Cynoteck-1.png"
            alt="Cynoteck Logo"
            className="max-w-[200px] max-h-12 mx-auto object-contain"
            onError={(e) => (e.target.src = "/cynoteck-logo.png")}
          />
          </>}
        <Button variant="ghost" size="icon" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <Menu className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </Button>
      </div>

      <nav className="flex flex-col gap-2 p-4">
        <Link href="/admin/blog-post/allItem">
          <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground hover:text-white">
            <LayoutDashboard className="w-5 h-5" />
            {!collapsed && <span>Dashboard</span>}
          </Button>
        </Link>

        {!collapsed && (
          <Accordion type="multiple" className="w-full">
            {postTypes.map((type) => (
              <AccordionItem key={type} value={type}>
                <AccordionTrigger className="text-muted-foreground capitalize">
                  {type.replace("-", " ")}
                </AccordionTrigger>
                <AccordionContent className="pl-2 flex flex-col gap-1">
                  {postActions.map(({ label, value, icon: Icon }) => (
                    <Link key={value} href={`/admin/${type}/${value}`}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start gap-2 text-muted-foreground hover:text-white"
                      >
                        <Icon className="w-4 h-4" />
                        <span>{label}</span>
                      </Button>
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </nav>

      <div className="mt-auto p-4 border-t">
        <div className="mb-2 text-muted-foreground text-xs uppercase tracking-wide">
          {!collapsed && `${auth?.username || "User"} (${auth?.role || "admin"})`}
        </div>

        {userMenu.map(({ label, href, icon: Icon }) => (
          <Link key={label} href={href}>
            <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground hover:text-white">
              <Icon className="w-5 h-5" />
              {!collapsed && <span>{label}</span>}
            </Button>
          </Link>
        ))}

        <Button
          variant="ghost"
          className="w-full justify-start gap-2 text-red-500 hover:text-red-600 mt-2"
          onClick={handleLogout}
        >
          <LogOut className="w-5 h-5" />
          {!collapsed && <span>Logout</span>}
        </Button>
      </div>
    </aside>
  );
}
