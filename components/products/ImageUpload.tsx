"use client"
import { CldUploadWidget } from "next-cloudinary"
import { TbPhotoPlus } from "react-icons/tb"


export default function ImageUpload() {
    return (
        <CldUploadWidget
            onSuccess={(result, { widget }) => {
                console.log(result)
            }}
            uploadPreset="tnaz0o7k"
            options={{
                maxFiles: 1,

            }}
        >
            {({ open }) => (
                <>
                    <div className=" space-y-2">
                        <label className=" text-slate-800">Image Product</label>
                        <div
                            onClick={() => open()}
                            className=" relative cursor-pointer hover:opacity-70 transition p-10 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600 bg-slate-100"
                        >
                            <TbPhotoPlus
                                size={50}
                            />

                            <p className=" text-lg font-semibold">Add image</p>


                        </div>
                    </div>
                </>
            )}
        </CldUploadWidget>
    )
}
