import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function MSignin(){
        return(
             <div className="fixed inset-0 flex flex-col items-center justify-center space-y-4 w-full px-6">
                  <div className="text-4xl text-center font-bold">
                    <p>Get More Opportunities</p>
                  </div>
                  <div className="w-full max-w-sm">
                    <Button variant="outline" className="w-full text-purple-500 font-bold">
                      + Signup With Google
                    </Button>
                  </div>
                  <div className="flex items-center w-full max-w-sm">
                    <hr className="flex-grow border-t border-gray-300" />
                    <span className="px-2 text-gray-500">Or Sign Up with Gmail</span>
                    <hr className="flex-grow border-t border-gray-300" />
                  </div>
                  <div className="w-full max-w-sm text-left">
                    <div className="mb-3">
                      <Label htmlFor="email">Email</Label>
                    </div>
                    <div className="text-gray font-thin mb-4">
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 text-lg border rounded-md"
                      />
                    </div>
            
                    <div className="mb-3">
                      <Label htmlFor="Password">Password</Label>
                    </div>
                    <div className="text-gray font-thin mb-4 ">
                      <input
                        type="Password"
                        placeholder="Password"
                        className="w-full p-3 text-lg border rounded-md"
                      />
                    </div>
            
                    <div className="mb-3">
                      <Label htmlFor="FullName">FullName</Label>
                    </div>
                    <div className="text-gray font-thin mb-4">
                      <input
                        type="FullName"
                        placeholder="FullName"
                        className="w-full p-3 text-lg border rounded-md"
                      />
                    </div>
                  </div>
            
                  <div className=" max-w-sm w-full bg-purple-500 cursor-pointer" >
                  <Button href="#https://www.facebook.com/" variant="Outline" >Continue</Button>      </div>
                  <div className="text-center mt-4">
                          <p className="text-sm">Already have an account? 
                            <a href="#" className="text-purple-500 ml-1">Login</a>
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
                
        );




}