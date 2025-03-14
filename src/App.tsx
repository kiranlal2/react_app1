import { useState } from "react";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { WandSparkles, Upload, GalleryHorizontal, LayoutGrid, Newspaper, Lightbulb, LibraryBig, FileChartColumn, ChartSpline, SquarePen, Calendar1, CircleUserRound } from "lucide-react";

const PosteeyGenerator = () => {
  // State variables for managing form inputs
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState("");
  const [length, setLength] = useState("");
  const [caption, setCaption] = useState("");
  // const [image, setImage] = useState(null);

  // Function to generate a caption based on the topic
  const handleGenerateCaption = () => {
    setCaption(`Generated caption for topic: ${topic}`);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar Navigation */}
      <div className="w-1/5 bg-gray-100 p-4 space-y-4">
        <h1 className="">Posteey</h1>
        <Button className="w-full bg-blue"><WandSparkles className="mr-2" /> Quick Post</Button>
        <p>Content Creation & Management</p>
        <div className="space-y-2">
          <Button variant="ghost"><LayoutGrid className="mr-2" /> Dashboard</Button>
          <Button variant="ghost"><Newspaper className="mr-2" /> Post Generator</Button>
          <Button variant="ghost"><GalleryHorizontal className="mr-2" /> Carousel Generator</Button>
          <Button variant="ghost"><Lightbulb className="mr-2" /> Idea Generator</Button>
          <Button variant="ghost"><LibraryBig className="mr-2" /> My Library</Button>
          <Button variant="ghost"><FileChartColumn className="mr-2" /> Analytics</Button>
          <Button variant="ghost"><ChartSpline className="mr-2" /> Viral Post</Button>
          <p>Drafts & Scheduling</p>
          <Button variant="ghost"><SquarePen className="mr-2" /> Drafts</Button>
          <Button variant="ghost"><Calendar1 className="mr-2" /> Calendar</Button>
          <p>Other</p>
          <Button variant="ghost"><CircleUserRound className="mr-2" /> Profile</Button>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex-1 p-6">
        <h2 className="text-xl font-bold">Create Post</h2>
        <Card className="p-4 mt-4">
          <CardContent>
            {/* Input field for entering topic */}
            <label className="text-sm font-semibold">Create Caption from a Topic</label>
            <Input 
              placeholder="Powerful events in india History" 
              value={topic} 
              onChange={(e) => setTopic(e.target.value)}
            />
            
            {/* Dropdowns for selecting tone and length of text */}
            <div className="flex space-x-4 mt-4">
              <Select value={tone} onChange={(e) => setTone(e.target.value)}>
                <option value="">Select Tone</option>
                <option value="Casual">Casual</option>
                <option value="Formal">Formal</option>
              </Select>
              
              <Select value={length} onChange={(e) => setLength(e.target.value)}>
                <option value="Short">Short</option>
                <option value="Medium">Medium</option>
                <option value="Long">Long</option>
              </Select>
            </div>
          </CardContent>
          {/* File Upload Section */}
          <div className="p-4 border-dashed border-2 border-gray-300 mt-4 flex flex-col items-center justify-center">
            <Upload size={24} className="text-gray-500" />
            <p className="text-gray-500 mt-2">Upload Image or <span className="text-blue-500 cursor-pointer">Choose from files</span></p>
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
};

export default PosteeyGenerator;
