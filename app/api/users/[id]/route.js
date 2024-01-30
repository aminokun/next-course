import { users } from "@/app/util/db"
import { NextResponse } from "next/server";
import fs from "fs"

// 2. get user by iD
export async function GET(_, res) {
    const { id } = await res.params;
    const user = users.filter((u) => u.id == id);
    return NextResponse.json({ user });
}

// 3. login

export async function POST(req, res) {
    let { name, email, password } = await req.json()
    const { id } = await res.params
    const {
        name: uName,
        email: uEmail,
        password: uPassword
    } = users.find((u) => u.id == id)

    if (uName == name && uEmail == email && uPassword == password) {
        return NextResponse.json({ result: "je bent in gelogged bro" })
    } else if (!name || !email || !password) {
        return NextResponse.json({ result: "bro geef ff alles mee man" })
    } else {
        return NextResponse.json({ result: "bro wat is dit" })
    }

}

// 6. Delete broeder

export async function DELETE(req, res) {
    const { id } = await res.params

    const userIndex = users.findIndex((user) => user.id == id)

    if (userIndex == -1) {
        return NextResponse.json(
            { result: "broeder niet gevonden man" },
            { status: 404 }
        )
    }

    users.splice(userIndex, 1)

    const updatedUserArray = users;

    const updatedData = JSON.stringify(updatedUserArray, null, 2);

    fs.writeFileSync(
        './app/util/db.js',
        `export const users = ${updatedData};`,
        "utf-8"
    );

    return NextResponse.json(
        { success: "broeder is verwijderd man" }
    )
}