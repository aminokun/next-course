import { users } from "@/app/util/db"
import { NextResponse } from "next/server";
import fs from 'fs'



// 1. all users data
export function GET() {
    const data = users;
    return NextResponse.json(
        { data },
        { status: 200 }
    );
}


// 4. Create a new bro

export async function POST(req, res) {
    let { id, name, email, password } = await req.json()

    if (!id || !name || !email || !password) {
        return NextResponse.json(
            { result: "bro je heb niet alles ingevuld" },
            { status: 400 }
        );
    } else {
        // Add bro aan het lijstje
        users.push({ id, name, email, password });

        const updatedUserArray = users;

        const updatedData = JSON.stringify(updatedUserArray, null, 2);

        fs.writeFileSync(
            './app/util/db.js',
            `export const users = ${updatedData};`,
            "utf-8"
        );

        return NextResponse.json({ succes: "Bro is toegevoegd man" })
    }
}

// 5. update brother

export async function PUT(req, res) {
    let { id, name, email, password } = await req.json()

    const userIndex = users.findIndex((user) => user.id == id)

    if (userIndex == -1) {
        return NextResponse.json(
            { result: "broeder niet gevonden" },
            { status: 404 }
        )
    }

    if (name) {
        users[userIndex].name = name
    }
    if (email) {
        users[userIndex].email = email
    }
    if (password) {
        users[userIndex].password = password
    }

    const updatedUserArray = users;

    const updatedData = JSON.stringify(updatedUserArray, null, 2);

    fs.writeFileSync(
        './app/util/db.js',
        `export const users = ${updatedData};`,
        "utf-8"
    );

    return NextResponse.json({ succes: "Bro is aangepast man" })

}