import mongoose from "mongoose";

const { Schema } = mongoose;

const boardSchema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: false, // 한 아이디가 여러 문의글을 올릴 수 있으므로 false 처리
  },

  boardTitle: {
    type: String,
    required: true,
  },

  boardText: {
    type: Schema.Types.Mixed, // 다양한 타입을 저장할 수 있음. 우선 냅다 넣어봄
    required: true,
  },

  userCategory: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Board", boardSchema);
