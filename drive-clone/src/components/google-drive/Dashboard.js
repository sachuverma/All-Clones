import React from "react";

import { Container } from "react-bootstrap";

import NavbarComponent from "./NavbarComponent";
import AddFolderButton from "./AddFolderButton";
import Folder from "./Folder";

import { useFolder } from "../../hooks/useFolder";

function Dashboard() {
  const { folder, childFolders } = useFolder("Of9eGcin5NKxhi6u1xA4");
  console.log("curr folder", folder);
  console.log("child folders", childFolders);

  return (
    <div>
      <NavbarComponent />
      <Container fluid>
        <AddFolderButton currentFolder={folder} />

        {childFolders.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFolders.map((child) => (
              <div key={child.id} style={{ maxWidth: "250px" }} className="p-2">
                <Folder folder={child} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}

export default Dashboard;
