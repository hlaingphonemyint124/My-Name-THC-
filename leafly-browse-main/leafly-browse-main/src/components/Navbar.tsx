import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LogOut, User, Shield, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useAdmin } from "@/hooks/useAdmin";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.png";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();
  const { isAdmin } = useAdmin();

  const isActive = (path) => location.pathname === path;

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={logo}
              alt="My Name THC"
              className="h-12 w-auto transition-all duration-300 group-hover:scale-110"
            />
            <div className="flex flex-col -space-y-1">
              <span className="text-lg font-bold text-foreground transition-colors group-hover:text-accent">
                My Name THC
              </span>
              <span className="text-xs font-medium text-muted-foreground transition-colors group-hover:text-accent">
                มายเนมทีเอชซี
              </span>
            </div>
          </Link>

          {/* HAMBURGER ICON (mobile) */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              className="ml-2 text-foreground hover:text-accent"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* NAVIGATION LINKS (desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive("/") ? "text-accent" : "text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive("/products") ? "text-accent" : "text-foreground"
              }`}
            >
              Products
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive("/about") ? "text-accent" : "text-foreground"
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive("/contact") ? "text-accent" : "text-foreground"
              }`}
            >
              Contact
            </Link>
            <ThemeToggle />

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <div className="px-2 py-1.5 text-sm">
                    <p className="font-medium">{user.email}</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      Profile Settings
                    </Link>
                  </DropdownMenuItem>
                  {isAdmin && (
                    <DropdownMenuItem asChild>
                      <Link to="/admin" className="cursor-pointer">
                        <Shield className="mr-2 h-4 w-4" />
                        Admin Dashboard
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/auth">
                <Button variant="premium" size="sm">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {menuOpen && (
        <div className="md:hidden bg-card border-t border-border px-4 py-3 space-y-3">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className={`block text-sm font-medium ${
              isActive("/") ? "text-accent" : "text-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            to="/products"
            onClick={() => setMenuOpen(false)}
            className={`block text-sm font-medium ${
              isActive("/products") ? "text-accent" : "text-foreground"
            }`}
          >
            Products
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={`block text-sm font-medium ${
              isActive("/about") ? "text-accent" : "text-foreground"
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={`block text-sm font-medium ${
              isActive("/contact") ? "text-accent" : "text-foreground"
            }`}
          >
            Contact
          </Link>

          {user ? (
            <>
              <Link
                to="/profile"
                onClick={() => setMenuOpen(false)}
                className="block text-sm font-medium text-foreground"
              >
                Profile
              </Link>
              {isAdmin && (
                <Link
                  to="/admin"
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm font-medium text-foreground"
                >
                  Admin Dashboard
                </Link>
              )}
              <button
                onClick={handleSignOut}
                className="block text-sm font-medium text-left text-red-500 w-full"
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link to="/auth" onClick={() => setMenuOpen(false)}>
              <Button variant="premium" size="sm" className="w-full">
                Sign In
              </Button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};
