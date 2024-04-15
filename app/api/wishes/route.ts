import { globalVar } from '@/app/constants/env'
import { MongoClient } from 'mongodb'

export async function GET() {
  let client: MongoClient

  try {
    client = await MongoClient.connect(globalVar.MONGODB_URI)
  } catch (error) {
    return Response.json({ message: 'unable to connect to the database' }, { status: 500 })
  }

  try {
    const db = client.db()
    const result = await db.collection('wishes').find().sort({ createdAt: -1 }).toArray()
    client.close()
    return Response.json(result, { status: 200 })
  } catch (error) {
    client.close()
    return Response.json({ message: 'unable to get wishes' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  let client: MongoClient

  try {
    client = await MongoClient.connect(globalVar.MONGODB_URI)
  } catch (error) {
    return Response.json({ message: 'unable to connect to the database' }, { status: 500 })
  }

  try {
    const body = await request.json()
    const payload = { ...body, createdAt: new Date().getTime() }
    const db = client.db()
    const result = await db.collection('wishes').insertOne(payload)
    payload._id = result.insertedId
    return Response.json(payload, { status: 201 })
  } catch (error) {
    return Response.json({ message: 'failed to submit your wish' }, { status: 500 })
  }
}
