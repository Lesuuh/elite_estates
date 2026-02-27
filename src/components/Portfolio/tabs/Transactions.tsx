import {
  Download,
  Search,
  Building2,
  User,
  CheckCircle2,
  Clock,
  FileText,
} from "lucide-react";

const Transactions = () => {
  const transactions = [
    {
      id: "EP-901",
      property: "The Glass Pavilion",
      vendor: "EstatePro (Official)",
      amount: "₦1.8B",
      date: "Oct 24, 2025",
      status: "Completed",
    },
    {
      id: "EP-442",
      property: "Azure Waterfront Villa",
      vendor: "Private Investor",
      amount: "₦250M",
      date: "Feb 12, 2026",
      status: "Processing",
    },
    {
      id: "EP-110",
      property: "Lekki Penthouse",
      vendor: "EstatePro (Official)",
      amount: "₦450M",
      date: "Feb 28, 2026",
      status: "Completed",
    },
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h2 className="text-3xl font-serif text-primary italic">
          Financial Ledger
        </h2>

        <div className="relative w-full md:w-64">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={16}
          />
          <input
            type="text"
            placeholder="Search transactions..."
            className="w-full bg-white border border-gray-100 py-3 pl-10 pr-4 rounded-xl text-xs focus:outline-none focus:border-accent"
          />
        </div>
      </div>

      <div className="bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-50/50 border-b border-gray-50">
              <th className="px-8 py-6 text-[10px] uppercase tracking-widest font-bold text-gray-400">
                Ref ID
              </th>
              <th className="px-8 py-6 text-[10px] uppercase tracking-widest font-bold text-gray-400">
                Property & Vendor
              </th>
              <th className="px-8 py-6 text-[10px] uppercase tracking-widest font-bold text-gray-400">
                Amount
              </th>
              <th className="px-8 py-6 text-[10px] uppercase tracking-widest font-bold text-gray-400">
                Status
              </th>
              <th className="px-8 py-6 text-[10px] uppercase tracking-widest font-bold text-gray-400 text-right">
                Documents
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {transactions.map((txn) => (
              <tr
                key={txn.id}
                className="hover:bg-gray-50/20 transition-colors"
              >
                <td className="px-8 py-6 font-mono text-[10px] text-gray-400">
                  {txn.id}
                </td>

                <td className="px-8 py-6">
                  <p className="text-sm font-serif text-primary font-bold">
                    {txn.property}
                  </p>
                  <div className="flex items-center gap-1 mt-1 text-gray-400">
                    {txn.vendor.includes("EstatePro") ? (
                      <Building2 size={10} />
                    ) : (
                      <User size={10} />
                    )}
                    <span className="text-[10px] italic">{txn.vendor}</span>
                  </div>
                </td>

                <td className="px-8 py-6">
                  <p className="text-sm font-bold text-primary">{txn.amount}</p>
                  <p className="text-[9px] text-gray-400 uppercase tracking-tighter">
                    {txn.date}
                  </p>
                </td>

                <td className="px-8 py-6">
                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-tighter ${
                      txn.status === "Completed"
                        ? "bg-green-50 text-green-600 border-green-100"
                        : "bg-blue-50 text-blue-600 border-blue-100"
                    }`}
                  >
                    {txn.status === "Completed" ? (
                      <CheckCircle2 size={12} />
                    ) : (
                      <Clock size={12} />
                    )}
                    {txn.status}
                  </div>
                </td>

                <td className="px-8 py-6 text-right">
                  <button className="text-accent hover:text-primary transition-all p-2 bg-accent/5 rounded-lg">
                    <Download size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 p-6 bg-primary/5 border border-primary/10 rounded-2xl flex items-center justify-center gap-3">
        <FileText size={18} className="text-accent" />
        <p className="text-xs text-gray-500 font-light italic">
          Signed deeds and receipts are uploaded manually by our team upon deal
          closure.
        </p>
      </div>
    </div>
  );
};

export default Transactions;
