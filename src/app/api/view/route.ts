import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const GET = async () => {


    const data = await prisma.review.findMany()



    return NextResponse.json({
        data
    })
}