import ModalExampleComponent from "./components/modal/ModalExampleComponent";
import ToastExampleComponent from "./components/toast/ToastExampleComponent";
import ToastProvider from "./providers/ToastProvider";

function App() {
  return (
    <div className="App">
      <ToastProvider>
        <ToastExampleComponent />
        <ModalExampleComponent />
      </ToastProvider>
    </div>
  );
}

export default App;
