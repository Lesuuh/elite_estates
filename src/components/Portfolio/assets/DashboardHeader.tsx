import { Plus } from "lucide-react";

interface HeaderProps {
  title: string;
  userName: string;
  inquire: string;
  list: string;
  onInquire: () => void;
  onList: () => void;
}

const DashboardHeader = ({
  title,
  userName,
  inquire,
  list,
  onInquire,
  onList,
}: HeaderProps) => {
  
  return (
    <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
      <div>
        <h1 className="text-4xl font-serif text-primary">{title}</h1>
        <p className="text-gray-500 font-light mt-1">
          Welcome back, {userName}
        </p>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onInquire}
          className="bg-primary text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-primary transition-all shadow-lg shadow-primary/10"
        >
          {inquire}
        </button>

        <button
          onClick={onList}
          className="group bg-primary text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-primary transition-all flex items-center gap-3 shadow-xl"
        >
          <Plus
            size={16}
            className="group-hover:rotate-90 transition-transform"
          />
          {list}
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;