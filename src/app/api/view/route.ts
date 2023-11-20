import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const GET = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {

    const skip = req.url?.split('?')[ 1 ].split("=")[ 1 ]

    const data = await prisma.review.findMany({ skip: 0 })



    return NextResponse.json({
        data
    })
}