import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const POST = async (
    req: Request,
    res: NextApiResponse
) => {

    const data = await req.json()


    await prisma.review.create({
        data: {
            message: data?.message,
            name: data?.name ?? "anonymous"
        }
    })




    return NextResponse.json({
        status: 200,
        message: "hello world"
    })
}