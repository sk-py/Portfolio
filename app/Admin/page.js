import Input from "../components/Input";
import { WavyBackground } from "../components/wavy-background";

const Login = () => {
  return (
    <div className="bg-black relative flex items-center justify-center">
      <WavyBackground />
      <Input />
    </div>
  );
};

export default Login;
