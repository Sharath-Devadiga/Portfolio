import { User, FolderOpen, Wrench, Phone } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  const navItems = [
    { id: 'profile', label: "PROFILE", icon: User },
    { id: 'cases', label: 'PROJECTS', icon: FolderOpen },
    { id: 'tools', label: 'SKILLS', icon: Wrench },
    { id: 'contact', label: 'CONTACT', icon: Phone },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b-2 border-border shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-2 md:gap-4 py-4 overflow-x-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`
                  relative font-typewriter text-xs md:text-sm px-4 md:px-6 py-3 
                  transition-all duration-300 whitespace-nowrap
                  border-2 border-border
                  ${isActive 
                    ? 'bg-primary text-primary-foreground shadow-lg -translate-y-1' 
                    : 'bg-card/50 text-muted-foreground hover:bg-muted hover:-translate-y-0.5'
                  }
                `}
                style={{
                  clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
                }}
              >
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                </div>
                
                {/* Tab notch effect */}
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-primary" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
