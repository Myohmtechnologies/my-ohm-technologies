import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Icônes pour modifier et supprimer
import Image from "next/image";

const BlogList = ({ blogs, handleDelete }) => {
  return (
    <div className="blog-list-container">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Titre</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {blogs.map((blog) => (
              <TableRow key={blog._id}>
                {/* Affichage de l'image */}
                <TableCell>
                  <div style={{ position: 'relative', width: '50px', height: '50px' }}>
                    {blog.imageUrl ? (
                      <Image 
                        src={blog.imageUrl} 
                        alt={blog.title}
                        width={50}
                        height={50}
                        className="object-cover"
                        onError={(e) => {
                          e.target.src = "/images/blog-header.png";
                        }}
                      />
                    ) : (
                      <Image 
                        src="/images/blog-header.png"
                        alt="Image par défaut"
                        width={50}
                        height={50}
                        className="object-cover"
                      />
                    )}
                  </div>
                </TableCell>
                {/* Affichage du titre */}
                <TableCell>{blog.title}</TableCell>
                {/* Actions avec icônes */}
                <TableCell>
                  {/* Bouton de modification */}
                  <IconButton
                    aria-label="modifier"
                    color="primary"
                    onClick={() => console.log('Modifier', blog.slug)} // Remplacer par la logique de modification
                  >
                    <FaEdit />
                  </IconButton>
                  {/* Bouton de suppression */}
                  <IconButton
                    aria-label="supprimer"
                    color="secondary"
                    onClick={() => handleDelete(blog._id)} // Appel de la fonction handleDelete
                  >
                    <FaTrash />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BlogList;
