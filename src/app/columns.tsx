"use client"

import {ColumnDef} from "@tanstack/react-table"
import {User} from "@/types"

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "username",
        header: "Username",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "phone",
        header: "Phone Number",
    },
    {
        accessorKey: "name",
        header: "Name"
    }
]
