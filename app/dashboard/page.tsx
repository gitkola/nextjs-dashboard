import Link from "next/link";

export default function Page() {
  return (
    <div>
      <p>Dashboard Page</p>
      <Link href="/dashboard/customers">Customers</Link>
      {' '}
      <Link href="/dashboard/invoices">Invoices</Link>
    </div>
  );
}