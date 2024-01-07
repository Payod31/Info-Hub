// JavaScript for the Search Portal

// Function to perform a search
function showMockResults(query) {
  // Ensure a query is provided and is a string
  if (!query || typeof query !== 'string') {
      console.error('Please provide a valid search query.');
      return;
  }

  // Clear all previous search results
  clearResults();

  // Display search results based on the query (case-insensitive)
  switch (query.toLowerCase()) {
      case 'data science':
          showResults('videoResults', searchData.dataScience.videos);
          showResults('bookResults', searchData.dataScience.books);
          showResults('articleResults', searchData.dataScience.articles);
          showResults('blogResults', searchData.dataScience.blogs);
          showResults('studyMaterialResults', searchData.dataScience.studyMaterial);
          showResults('photoResults', searchData.dataScience.photos);
          showResults('courseResults', searchData.dataScience.courses);
          showResults('interviewResults', searchData.dataScience.interviewQuestions);
          showResults('qnaResults', searchData.dataScience.qna);
          break;
      case 'marketing':
          showResults('videoResults', searchData.marketing.videos);
          showResults('bookResults', searchData.marketing.books);
          showResults('articleResults', searchData.marketing.articles);
          showResults('blogResults', searchData.marketing.blogs);
          showResults('studyMaterialResults', searchData.marketing.studyMaterial);
          showResults('photoResults', searchData.marketing.photos);
          showResults('courseResults', searchData.marketing.courses);
          showResults('interviewResults', searchData.marketing.interviewQuestions);
          showResults('qnaResults', searchData.marketing.qna);
          break;
      // Add more cases for other topics as needed
      default:
          console.error('Invalid search query. Please use a supported topic.');
          break;
  }
}

// Function to clear all previous search results
function clearResults() {
  var sections = document.querySelectorAll('.results');
  sections.forEach(function (section) {
      section.innerHTML = '';
  });
}

// Function to display search results in a specific section
function showResults(sectionId, results) {
  // Get the results container for the section
  var resultsContainer = document.getElementById(sectionId);

  // Display search results as links
  for (var i = 0; i < results.length; i++) {
      var resultLink = document.createElement('a');
      resultLink.href = results[i].url;
      resultLink.textContent = results[i].title;
      resultLink.target = '_blank'; // Open link in a new tab
      resultsContainer.appendChild(resultLink);
  }
}

// Mock data for search results
var searchData = {
  dataScience: {
      videos: [
          { title: 'Introduction to Data Science', url: 'https://www.example.com/data-science-beginners' },
          { title: 'Data Science in Real Life', url: '#' },
          // Add more video results as needed
      ],
      books: [
          { title: 'Data Science for Beginners', url: '#' },
          { title: 'Advanced Data Analysis', url: '#' },
          // Add more book results as needed
      ],
      articles: [
          { title: 'The Role of Data Science in Industry', url: '#' },
          { title: 'Data Science Techniques Explained', url: '#' },
          // Add more article results as needed
      ],
      blogs: [
          { title: 'Data Science Insights Blog', url: '#' },
          { title: 'Practical Data Science Tips', url: '#' },
          // Add more blog results as needed
      ],
      studyMaterial: [
          { title: 'Data Science Learning Path', url: '#' },
          { title: 'Fundamentals of Data Analysis', url: '#' },
          // Add more study material results as needed
      ],
      photos: [
          { title: 'Data Science Conference Photos', url: '#' },
          { title: 'Visualizing Data Concepts', url: '#' },
          // Add more photo results as needed
      ],
      courses: [
          { title: 'Mastering Data Science', url: '#' },
          { title: 'Data Science Certification Course', url: '#' },
          // Add more course results as needed
      ],
      interviewQuestions: [
          { title: 'Common Data Science Interview Questions', url: '#' },
          { title: 'Preparing for a Data Science Interview', url: '#' },
          // Add more interview question results as needed
      ],
      qna: [
          { title: 'Data Science Q&A Forum', url: '#' },
          { title: 'Ask the Experts: Data Science Edition', url: '#' },
          // Add more Q&A results as needed
      ],
  },
  marketing: {
      videos: [
          { title: 'Introduction to Marketing', url: '#' },
          { title: 'Marketing Strategies', url: '#' },
          // Add more video results as needed
      ],
      books: [
          { title: 'Marketing Basics', url: '#' },
          { title: 'Digital Marketing Guide', url: '#' },
          // Add more book results as needed
      ],
      articles: [
          { title: 'Effective Marketing Techniques', url: '#' },
          { title: 'Trends in Modern Marketing', url: '#' },
          // Add more article results as needed
      ],
      blogs: [
          { title: 'Marketing Insights Blog', url: '#' },
          { title: 'Practical Marketing Tips', url: '#' },
          // Add more blog results as needed
      ],
      studyMaterial: [
          { title: 'Marketing Learning Path', url: '#' },
          { title: 'Fundamentals of Marketing Analysis', url: '#' },
          // Add more study material results as needed
      ],
      photos: [
          { title: 'Marketing Event Photos', url: '#' },
          { title: 'Visualizing Marketing Concepts', url: '#' },
          // Add more photo results as needed
      ],
      courses: [
          { title: 'Mastering Marketing', url: '#' },
          { title: 'Marketing Certification Course', url: '#' },
          // Add more course results as needed
      ],
      interviewQuestions: [
          { title: 'Common Marketing Interview Questions', url: '#' },
          { title: 'Preparing for a Marketing Interview', url: '#' },
          // Add more interview question results as needed
      ],
      qna: [
          { title: 'Marketing Q&A Forum', url: '#' },
          { title: 'Ask the Experts: Marketing Edition', url: '#' },
          // Add more Q&A results as needed
      ],
  },
  // Add more topics as needed
};
