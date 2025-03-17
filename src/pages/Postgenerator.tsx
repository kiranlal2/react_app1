import { useState } from "react";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Upload } from "lucide-react";

function Postgenerator() {
    // State variables for managing form inputs
    const [topic, setTopic] = useState("");
    const [tone, setTone] = useState("");
    const [length, setLength] = useState("");
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState("");

    // Function to generate a caption based on the topic
    const handleGenerateCaption = () => {
        setCaption(`Generated caption for topic: ${topic}`);
    };

    // Function to handle image upload
    interface ImageUploadEvent extends React.ChangeEvent<HTMLInputElement> {
      target: HTMLInputElement & { files: FileList };
    }

    const handleImageUpload = (event: ImageUploadEvent) => {
      const file = event.target.files[0];
      if (file) {
        setImage(URL.createObjectURL(file));
      }
    };

    return (
        <div className="flex h-screen">
            {/* Main Content Section */}
            <div className="flex-1 p-6">
                <h2 className="text-xl font-bold">Create Post</h2>
                <Card className="p-4 mt-4">
                    <CardContent>
                        {/* Input field for entering topic */}
                        <label className="text-sm font-semibold">Create Caption from a Topic</label>
                        <Input 
                            placeholder="Powerful events in Indian history" 
                            value={topic} 
                            onChange={(e) => setTopic(e.target.value)}
                        />
                        
                        {/* Dropdowns for selecting tone and length of text */}
                        <div className="flex space-x-4 mt-4">
                            <select 
                                className="border rounded p-2 w-full" 
                                value={tone} 
                                onChange={(e) => setTone(e.target.value)}
                            >
                                <option value="">Select Tone</option>
                                <option value="Casual">Casual</option>
                                <option value="Formal">Formal</option>
                            </select>
                            
                            <select 
                                className="border rounded p-2 w-full" 
                                value={length} 
                                onChange={(e) => setLength(e.target.value)}
                            >
                                <option value="">Select Length</option>
                                <option value="Short">Short</option>
                                <option value="Medium">Medium</option>
                                <option value="Long">Long</option>
                            </select>
                        </div>
                    </CardContent>

                    {/* File Upload Section */}
                    <div className="p-4 border-dashed border-2 border-gray-300 mt-4 flex flex-col items-center justify-center">
                        <Upload size={24} className="text-gray-500" />
                        <p className="text-gray-500 mt-2">
                            Upload Image or{" "}
                            <label className="text-blue-500 cursor-pointer">
                                Choose from files
                                <input 
                                    type="file" 
                                    accept="image/*" 
                                    className="hidden" 
                                    onChange={handleImageUpload} 
                                />
                            </label>
                        </p>
                        {image && (
                            <img src={image} alt="Uploaded" className="mt-4 max-w-xs rounded" />
                        )}
                    </div>
                    
                    {/* Generate Caption Button */}
                    <Button onClick={handleGenerateCaption} className="mt-4 w-full">
                        Generate Caption
                    </Button>
                </Card>
            </div>
            
            {/* Preview Panel */}
            <div className="flex-1 p-4">
                <h2 className="text-xl font-bold">Preview</h2>
                <Card className="p-4 mt-4">
                    <CardContent>
                        {/* Display generated caption */}
                        <p>{caption || "Generated caption will appear here..."}</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default Postgenerator;
