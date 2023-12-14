import mongoose, { Schema } from "mongoose";

const careerSchema = new Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
        },
        code: {
            type: String,
            required: true,
            unique: true,
        },
        schedules: [
            {
                type: Schema.Types.ObjectId,
                ref: "Schedule",
            },
        ],
    },
    { timestamps: true }
);

const Career = mongoose.model("Career", careerSchema);

export default Career;
