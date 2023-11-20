"use client";
import { usePathname } from "next/navigation";
import { FC, FormEvent, useState } from "react";
import axios from "axios";
import Modal from "./modal";
import { toast } from "react-toastify";

export const ReviewButton: FC = () => {
  // const handleClick = () => {
  //   let myDialog: any = document.getElementById("my_modal_3");
  //   myDialog.showModal();
  // };

  const notify = () => toast("Thanks ❤️");
  const [name, setName] = useState("");

  const [message, setMessage] = useState("");

  const pathname = usePathname();

  const [showPopup, setShowPopup] = useState(false);

  const handleOpen = () => setShowPopup(true);

  const handleClose = () => setShowPopup(false);

  //   console.log();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    axios.post("/api/update", {
      name,
      message,
    });
    setShowPopup(false);
    notify();
  };
  return (
    pathname.split("/").length === 3 && (
      <div className="fixed right-10 bottom-10">
        <button
          className="relative inline-block px-6 py-2 font-medium group rounded-full z-50  "
          onClick={handleOpen}
        >
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-primary group-hover:bg-primary"></span>
          <span className="relative text-lg text-black group-hover:text-white">
            Review
          </span>
          {showPopup && (
            <Modal onClose={handleClose}>
              <div className="card w-96 bg-base-100 shadow-xl text-white">
                <div className="card-body">
                  <div className="w-full flex   justify-center">
                    <h2 className="text-xl">Kindly say your Message</h2>
                  </div>
                  <form
                    className="flex flex-col space-y-6 pt-6"
                    onSubmit={handleSubmit}
                  >
                    <input
                      type="text"
                      placeholder="enter your name"
                      className="input input-bordered w-full max-w-xs"
                      onChange={(e) => setName(e.target.value)}
                    />
                    <textarea
                      className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                      placeholder="enter your message"
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <button className="btn btn-outline" type="submit">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </Modal>
          )}
        </button>
      </div>
    )
  );
};
