import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Linkedin from "@/assets/linkedin.svg";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Upload, Download, Link, ThumbsUp, MessageCircle, Share2, Send, Image } from "lucide-react";

export default function PostGenerator() {
  return (
    <div className="flex mt-5 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        <div className="max-w-3/5 mx-auto p-6 bg-white shadow-lg rounded-md">
        
            <div className="mb-4">
                <div className="flex text-[14px] justify-between items-center mb-4">
                    <label className="block text-gray-700 mb-1">Create Caption from a Topic</label>
                    <Select>
                        <SelectTrigger>
                        <SelectValue placeholder="Topic" />
                        </SelectTrigger>
                        <SelectContent>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="casual">Casual</SelectItem>
                        <SelectItem value="humorous">Humorous</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Textarea placeholder="Powerful events in Indian History" />
            </div>

            {/* Tone of Voice & Caption Length */}
            <div className="flex mb-4 text-[14px] justify-between">
                <div>
                    <label className="block text-gray-700">Tone of Voice</label>
                    <Select>
                        <SelectTrigger>
                        <SelectValue placeholder="Choose Voice" />
                        </SelectTrigger>
                        <SelectContent>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="casual">Casual</SelectItem>
                        <SelectItem value="humorous">Humorous</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label className="block text-gray-700 mb-1">Caption Length</label>
                    <Select>
                        <SelectTrigger>
                        <SelectValue placeholder="Choose Length" />
                        </SelectTrigger>
                        <SelectContent>
                        <SelectItem value="short">Short</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="long">Long</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Caption Template */}
            <div className="mb-4 text-[14px]">
                <label className="block text-gray-700 mb-1">Create Caption from Templates</label>
                <Textarea placeholder="Write me a LinkedIn post on Indian History..." />
            </div>

            {/* Image Upload Options */}
            <div className="mb-4 text-[14px]">
                <label className="block text-gray-700 mb-2">Add Images (Optional)</label>
                <div className="flex gap-2">
                <Button variant="outline">
                    <Upload className="w-4 h-4 mr-2" /> Upload Image
                </Button>
                <Button variant="outline">
                    <Image className="w-4 h-4 mr-2" /> Search Unsplash
                </Button>
                <Button variant="outline">
                    <Link className="w-4 h-4 mr-2" /> Embed Link
                </Button>
                </div>
            </div>

            {/* Drag & Drop File Upload */}
            <div className=" text-[14px] border-2 border-dashed border-gray-300 p-6 text-center rounded-lg mb-4">
                <Download className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                <p className="text-gray-500">Drag your files here or <span className="text-blue-500 cursor-pointer">Choose from files</span></p>
            </div>

            {/* Generate Caption Button */}
            <button className="w-full bg-blue-600 text-gray-500">Generate Caption</button>
        </div>

        <div className="max-w-2/5 mx-auto bg-white border border-gray-300 rounded-lg shadow-md p-4">
            {/* User Info */}
            <div className="flex items-center gap-3 mb-2">
                <img
                src="https://randomuser.me/api/portraits/women/44.jpg" // Replace with actual profile image URL
                alt="Profile"
                className="w-10 h-10 rounded-full"
                />
                <div>
                <h3 className="font-semibold text-gray-800">Akanksha Sharma</h3>
                <p className="text-xs text-gray-500">12h</p>
                </div>
            </div>

            {/* Post Content */}
            <p className="text-gray-600 text-sm mb-4">Generated caption would appear here...</p>

            {/* Interaction Bar */}
            <div className="border-t border-gray-200 flex justify-between text-gray-500 text-sm py-2">
                <p>0 comments</p>
                <p>0 reposts</p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between text-gray-600 py-2 text-[12px]">
                <button className="flex items-center gap-1 hover:text-blue-500">
                <ThumbsUp className="w-4 h-4" /> Like
                </button>
                <button className="flex items-center gap-1 hover:text-blue-500">
                <MessageCircle className="w-4 h-4" /> Comments
                </button>
                <button className="flex items-center gap-1 hover:text-blue-500">
                <Share2 className="w-4 h-4" /> Share
                </button>
                <button className="flex items-center gap-1 hover:text-blue-500">
                <Send className="w-4 h-4" /> Send
                </button>
            </div>

            {/* Connect LinkedIn Button */}
            <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-gray-500 py-2 rounded-md mt-2">
                <img src={Linkedin} alt="Linkedin" className="w-5 h-5" /> Connect LinkedIn
            </button>
        </div>
    </div>
  );
}
