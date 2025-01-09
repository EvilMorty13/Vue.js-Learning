<template>
  <div class="header">
    <h1>Blogs</h1>
    <RouterLink :to="{ name: 'blog-card-add' }" class="add-blog-icon">+</RouterLink>
  </div>

  <button @click="generatePDF" class="pdf-button">Download PDF</button>

  <MyWrapper>
    <div class="subcontainer" v-for="blog in blogs" :key="blog.id">
      <h3>Title : {{ blog.title }}</h3>
      <p>Body : {{ blog.body }}</p>
      <p>Author : {{ blog.author }}</p>
      <RouterLink :to="{ name: 'blog-card-detail', params: { id: blog.id } }">
        View Details
      </RouterLink>
    </div>
  </MyWrapper>

</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue';
import axios from '@/axios.js';
import MyWrapper from '@/components/MyWrapper.vue';
import { jsPDF } from 'jspdf';
const blogs = ref([]);


onMounted(async () => {
  try {
    const response = await axios.get('/blogs/');
    blogs.value = response.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
  }
});

const heading = ref("This is a report");

const generatePDF = () => {
  // Create a new jsPDF instance with A4 size
  const doc = new jsPDF({ format: 'a4' });

  const pageHeight = doc.internal.pageSize.height; // A4 page height
  const pageWidth = doc.internal.pageSize.width; // A4 page width
  const margin = 10; // Margin from the edges
  const contentWidth = pageWidth - 2 * margin; // Usable content width
  let y = 20; // Initial y position for content

  // Set the main title
  doc.setFontSize(18);
  doc.setTextColor(40, 40, 40);
  doc.text('Blogs', pageWidth / 2, y, { align: 'center' }); // Center the "Blogs" title
  y += 10; // Add spacing after the title

  // Add the heading below the title
  doc.setFontSize(16);
  doc.setTextColor(60, 60, 60); // Slightly darker gray for the heading
  doc.text(heading.value, pageWidth / 2, y, { align: 'center' });
  y += 15; // Add more spacing after the heading

  blogs.value.forEach((blog) => {
    const title = `Title: ${blog.title}`;
    const body = `Body: ${blog.body}`;
    const author = `Author: ${blog.author}`;

    // Break long text into multiple lines
    const titleLines = doc.splitTextToSize(title, contentWidth);
    const bodyLines = doc.splitTextToSize(body, contentWidth);
    const authorLines = doc.splitTextToSize(author, contentWidth);

    // Calculate the required height for this blog's content
    const requiredHeight =
      titleLines.length * 6 + bodyLines.length * 6 + authorLines.length * 6 + 20;

    // Check if the next blog fits on the current page
    if (y + requiredHeight > pageHeight - margin) {
      doc.addPage(); // Add a new page
      y = 20; // Reset y position for the new page
    }

    // Draw a box for the blog
    doc.setDrawColor(0, 0, 0); // Border color
    doc.setFillColor(240, 240, 240); // Background color
    doc.rect(margin, y, contentWidth, requiredHeight, 'FD');

    // Add the text content
    let textY = y + 10; // Starting y position for text inside the box
    doc.setFontSize(14);
    doc.setTextColor(0, 51, 153); // Dark blue
    titleLines.forEach((line) => {
      doc.text(line, margin + 5, textY);
      textY += 6;
    });

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0); // Black
    bodyLines.forEach((line) => {
      doc.text(line, margin + 5, textY);
      textY += 6;
    });

    doc.setTextColor(85, 85, 85); // Gray
    authorLines.forEach((line) => {
      doc.text(line, margin + 5, textY);
      textY += 6;
    });

    // Update y position for the next blog
    y += requiredHeight + 10;
  });

  // Save the PDF
  doc.save('blogs.pdf');
};

</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 98%;
}

h1 {
  flex-grow: 1;
  text-align: center;

}

.add-blog-icon {
  font-size: 36px;
  padding: 0px 10px;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 0, 0);
  border-radius: 50%;
  transition: 0.3s;
}

.add-blog-icon:hover {
  color: rgb(255, 0, 0);
  background-color: #000000;
}


.subcontainer {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  margin: 10px auto;
  border: 5px solid #000000;
  border-radius: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: #ffffff;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  width: 40%;
}

.subcontainer:hover {
  transform: translateY(-5px);
  background-color: #e0e0e0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 15px;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
}

h3 {
  margin: 0 0 10px;
}

p {
  margin: 0;
}

button {
  width: auto;
  height: auto;
  padding: 10px 10px;
  font-size: 1.2rem;
  border: none;
  background-color: #2C5F2D;
  color: white;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
button:hover {
  background-color: #97BC62;
}


</style>
