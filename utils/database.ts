import mongoose from 'mongoose';

let isConnected: any = false;

type ConnectionConfig = {
  dbName: string;
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
};
export const connectToDatabase = async () => {
  mongoose.set('strictQuery', true);
  if (isConnected) {
    console.log('=> using existing database connection');
    return Promise.resolve();
  }

  console.log('=> using new database connection');
  try {
    const db = await mongoose.connect(
      process.env.MONGODB_URI as any,
      {
        dbName: 'share_prompt',
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectionConfig,
    );
    isConnected = db.connections[0].readyState;

    console.log('=> connection success');
  } catch (e) {
    console.log('=> connection error');
    console.log(e);
  }
};
