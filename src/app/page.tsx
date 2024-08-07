import {columns} from "@/app/columns";
import {DataTable} from "@/components/ui/data-table";
import getUsers from "@/services";

export default async function Home() {

  const data = await getUsers();

  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <DataTable columns={columns} data={data}/>
      </main>
  );
}
