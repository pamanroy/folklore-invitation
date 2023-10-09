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
    const result = await db.collection('wishes').find().toArray()
    client.close()
    return Response.json(result, { status: 200 })
  } catch (error) {
    client.close()
    return Response.json({ message: 'unable to get wishes' }, { status: 500 })
  }
}
