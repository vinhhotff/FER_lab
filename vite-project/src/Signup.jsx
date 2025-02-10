import khinhkhicau from './assets/khinhkhicau.jpg';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

function Signup() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-yellow-400">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-3/4 max-w-4xl">
        
        <div className="w-1/2 bg-blue-200 relative">
          <img
            src={khinhkhicau}
            alt="Hot Air Balloon"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-yellow-400 opacity-50 mix-blend-multiply"></div>
        </div>

        <div className="p-8 w-1/2 mt-10">
          <p className="text-lg font-bold">Create your Free Account</p>

          <div className="mt-5 flex flex-col items-start gap-2">
            <Label htmlFor="FullName" className="text-xs font-medium">Full Name</Label>
            <Input 
              type="text" 
              id="FullName" 
              placeholder="Enter your Full Name here" 
              className="w-full px-4 py-3 text-sm text-gray-500 bg-gray-200 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mt-5 flex flex-col items-start gap-2">
            <Label htmlFor="email" className="text-xs font-medium">Email</Label>
            <Input 
              type="email" 
              id="email" 
              placeholder="Enter your email here" 
              className="w-full px-4 py-3 text-sm text-gray-500 bg-gray-200 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mt-5 flex flex-col items-start gap-2">
            <Label htmlFor="password" className="text-xs font-medium">Password</Label>
            <Input 
              type="password" 
              id="password" 
              placeholder="Enter your password here" 
              className="w-full px-4 py-3 text-sm text-gray-500 bg-gray-200 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mt-6 w-full">
            <Button 
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-3 text-sm font-bold rounded-full"> 
              Create Account
            </Button>

            <div className="text-center mt-4">
              <p className="text-sm">Already have an account? 
                <a href="#" className="text-yellow-500 ml-1">Login</a>
              </p>
            </div>

            <div className="text-center my-4 text-gray-500">- OR -</div>
            <div className="flex justify-center space-x-3">
              <button className="flex items-center space-x-2 px-4 py-2 border border-black rounded-full text-xs font-medium">
                <img src="https://img.icons8.com/color/20/000000/google-logo.png" alt="Google" className="w-5 h-5"/>
                <span>Sign up with Google</span>
              </button>
              
              <button className="flex items-center space-x-2 px-4 py-2 border border-black rounded-full text-xs font-medium">
                <img src="https://img.icons8.com/ios-glyphs/20/000000/github.png" alt="GitHub" className="w-5 h-5"/>
                <span>Sign up with GitHub</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
