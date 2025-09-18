import React, { useState } from 'react';

const ITCoursesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const courses = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      category: "web",
      progress: 67,
      provider: "FreeCodeCamp",
      link: "https://www.freecodecamp.org/learn/responsive-web-design/",
      description: "Learn HTML, CSS, JavaScript, and modern web development",
      duration: "300 hours",
      difficulty: "Beginner",
      lessons: [
        { id: 1, title: "HTML Fundamentals", completed: true },
        { id: 2, title: "CSS Styling & Layout", completed: true },
        { id: 3, title: "JavaScript Basics", completed: true },
        { id: 4, title: "Responsive Design", completed: false },
        { id: 5, title: "React.js Introduction", completed: false }
      ]
    },
    {
      id: 2,
      title: "CS50: Introduction to Computer Science",
      category: "programming",
      progress: 45,
      provider: "Harvard University",
      link: "https://cs50.harvard.edu/x/2024/",
      description: "Harvard's introduction to computer science and programming",
      duration: "120 hours",
      difficulty: "Intermediate",
      lessons: [
        { id: 1, title: "Scratch Programming", completed: true },
        { id: 2, title: "C Programming", completed: true },
        { id: 3, title: "Arrays and Algorithms", completed: true },
        { id: 4, title: "Memory Management", completed: false },
        { id: 5, title: "Data Structures", completed: false },
        { id: 6, title: "Python Programming", completed: false },
        { id: 7, title: "Web Development", completed: false }
      ]
    },
    {
      id: 3,
      title: "Cybersecurity Fundamentals",
      category: "security",
      progress: 23,
      provider: "Cybrary",
      link: "https://www.cybrary.it/course/introduction-to-it-and-cybersecurity",
      description: "Essential cybersecurity concepts and practices",
      duration: "40 hours",
      difficulty: "Beginner",
      lessons: [
        { id: 1, title: "Introduction to Cybersecurity", completed: true },
        { id: 2, title: "Network Security Basics", completed: true },
        { id: 3, title: "Cryptography Fundamentals", completed: false },
        { id: 4, title: "Risk Management", completed: false },
        { id: 5, title: "Incident Response", completed: false }
      ]
    },
    {
      id: 4,
      title: "Python Programming",
      category: "programming",
      progress: 89,
      provider: "Codecademy",
      link: "https://www.codecademy.com/learn/learn-python-3",
      description: "Complete Python programming course from basics to advanced",
      duration: "25 hours",
      difficulty: "Beginner",
      lessons: [
        { id: 1, title: "Python Syntax", completed: true },
        { id: 2, title: "Variables and Data Types", completed: true },
        { id: 3, title: "Control Flow", completed: true },
        { id: 4, title: "Functions", completed: true },
        { id: 5, title: "Object-Oriented Programming", completed: false }
      ]
    },
    {
      id: 5,
      title: "Google Cloud Platform Fundamentals",
      category: "cloud",
      progress: 56,
      provider: "Google Cloud",
      link: "https://www.cloudskillsboost.google/course_templates/60",
      description: "Introduction to Google Cloud Platform services",
      duration: "8 hours",
      difficulty: "Intermediate",
      lessons: [
        { id: 1, title: "Cloud Computing Overview", completed: true },
        { id: 2, title: "Google Cloud Services", completed: true },
        { id: 3, title: "Compute Engine", completed: true },
        { id: 4, title: "Cloud Storage", completed: false },
        { id: 5, title: "Networking", completed: false }
      ]
    },
    {
      id: 6,
      title: "Machine Learning Course",
      category: "ai",
      progress: 34,
      provider: "Andrew Ng - Stanford",
      link: "https://www.coursera.org/learn/machine-learning",
      description: "Comprehensive machine learning course by Andrew Ng",
      duration: "61 hours",
      difficulty: "Advanced",
      lessons: [
        { id: 1, title: "Introduction to ML", completed: true },
        { id: 2, title: "Linear Regression", completed: true },
        { id: 3, title: "Logistic Regression", completed: true },
        { id: 4, title: "Neural Networks", completed: false },
        { id: 5, title: "Deep Learning", completed: false },
        { id: 6, title: "Unsupervised Learning", completed: false }
      ]
    },
    {
      id: 7,
      title: "AWS Cloud Practitioner",
      category: "cloud",
      progress: 78,
      provider: "Amazon Web Services",
      link: "https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/",
      description: "AWS Cloud fundamentals and best practices",
      duration: "6 hours",
      difficulty: "Beginner",
      lessons: [
        { id: 1, title: "Cloud Computing Introduction", completed: true },
        { id: 2, title: "AWS Global Infrastructure", completed: true },
        { id: 3, title: "AWS Core Services", completed: true },
        { id: 4, title: "Security and Compliance", completed: true },
        { id: 5, title: "Pricing and Support", completed: false }
      ]
    },
    {
      id: 8,
      title: "Data Structures and Algorithms",
      category: "programming",
      progress: 12,
      provider: "MIT OpenCourseWare",
      link: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/",
      description: "MIT's comprehensive algorithms and data structures course",
      duration: "150 hours",
      difficulty: "Advanced",
      lessons: [
        { id: 1, title: "Algorithmic Thinking", completed: true },
        { id: 2, title: "Data Structures", completed: false },
        { id: 3, title: "Sorting Algorithms", completed: false },
        { id: 4, title: "Graph Algorithms", completed: false },
        { id: 5, title: "Dynamic Programming", completed: false }
      ]
    }
  ];

  const categories = [
    { key: 'all', name: 'All Courses', icon: '📚' },
    { key: 'web', name: 'Web Development', icon: '🌐' },
    { key: 'programming', name: 'Programming', icon: '💻' },
    { key: 'security', name: 'Cybersecurity', icon: '🔐' },
    { key: 'cloud', name: 'Cloud Computing', icon: '☁️' },
    { key: 'ai', name: 'AI & Machine Learning', icon: '🤖' }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const getDifficultyColor = (difficulty) => {
    switch(difficulty.toLowerCase()) {
      case 'beginner': return '#10B981';
      case 'intermediate': return '#F59E0B';
      case 'advanced': return '#EF4444';
      default: return '#6B7280';
    }
  };

  return (
    <div className="courses-container">
      <div className="courses-header">
        <h1>🎓 Free IT Courses</h1>
        <p>Browse available courses and lessons from top universities and platforms</p>
      </div>

      <div className="category-filters">
        {categories.map(category => (
          <button
            key={category.key}
            className={`category-btn ${selectedCategory === category.key ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.key)}
          >
            <span className="category-icon">{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      <div className="courses-grid">
        {filteredCourses.map(course => (
          <div key={course.id} className="course-card">
            <div className="course-header">
              <div className="course-info">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-provider">by {course.provider}</p>
                <p className="course-description">{course.description}</p>
              </div>
              <div className="course-meta">
                <span className="duration">⏱️ {course.duration}</span>
                <span 
                  className="difficulty" 
                  style={{ color: getDifficultyColor(course.difficulty) }}
                >
                  📊 {course.difficulty}
                </span>
              </div>
            </div>

            

            <div className="lessons-list">
              {course.lessons.slice(0, 4).map((lesson, index) => (
                <div key={lesson.id} className="lesson-item">
                  <span className="lesson-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="lesson-title">{lesson.title}</span>
                  <span className={`lesson-status ${lesson.completed ? 'completed' : 'pending'}`}>
                    {lesson.completed ? '✓' : '▶'}
                  </span>
                </div>
              ))}
              {course.lessons.length > 4 && (
                <div className="more-lessons">
                  +{course.lessons.length - 4} more lessons
                </div>
              )}
            </div>

            <div className="course-actions">
              <a 
                href={course.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="continue-btn"
              >
                {course.progress > 0 ? 'Continue Learning' : 'Start Course'}
              </a>
            
            </div>
          </div>
        ))}
      </div>

      <div className="additional-platforms">
        <h2>🌟 More Free Learning Platforms</h2>
        <div className="platforms-grid">
          <a href="https://www.edx.org/" target="_blank" rel="noopener noreferrer" className="platform-card">
            <h3>edX</h3>
            <p>Courses from Harvard, MIT, and more</p>
          </a>
          <a href="https://www.coursera.org/browse/computer-science" target="_blank" rel="noopener noreferrer" className="platform-card">
            <h3>Coursera</h3>
            <p>University courses with financial aid</p>
          </a>
          <a href="https://www.khanacademy.org/computing" target="_blank" rel="noopener noreferrer" className="platform-card">
            <h3>Khan Academy</h3>
            <p>Free programming and computer science</p>
          </a>
          <a href="https://www.udacity.com/courses/all" target="_blank" rel="noopener noreferrer" className="platform-card">
            <h3>Udacity</h3>
            <p>Tech courses and nanodegrees</p>
          </a>
        </div>
      </div>

      <style jsx>{`
        .courses-container {
        
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
        }

        .courses-header {
          text-align: center;
          margin-bottom: 40px;
          color: blue;
          
        }

        .courses-header h1 {
          font-size: 2.5rem;
          margin: 0 0 10px 0;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }

        .courses-header p {
          font-size: 1.1rem;
          opacity: 0.9;
          margin: 0;
        }

        .category-filters {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-bottom: 30px;
        }

        .category-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: white;
          border: none;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.2s ease;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .category-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        .category-btn.active {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          color: white;
        }

        .category-icon {
          font-size: 1.1rem;
        }

        .courses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 25px;
          margin-bottom: 40px;
        }

        .course-card {
          background: white;
          border-radius: 15px;
          padding: 25px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          transition: transform 0.2s ease;
        }

        .course-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
        }

        .course-header {
          margin-bottom: 20px;
        }

        .course-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 8px 0;
        }

        .course-provider {
          color: #6366f1;
          font-weight: 500;
          margin: 0 0 10px 0;
          font-size: 0.9rem;
        }

        .course-description {
          color: #6b7280;
          line-height: 1.5;
          margin: 0 0 15px 0;
        }

        .course-meta {
          display: flex;
          gap: 15px;
          font-size: 0.85rem;
        }

        .duration, .difficulty {
          display: flex;
          align-items: center;
          gap: 4px;
          font-weight: 500;
        }

        .progress-section {
          margin-bottom: 20px;
        }

        .progress-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .progress-text {
          font-weight: 600;
          color: #1f2937;
        }

        .lessons-count {
          font-size: 0.85rem;
          color: #6b7280;
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background: #e5e7eb;
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #10b981, #34d399);
          border-radius: 4px;
          transition: width 0.3s ease;
        }

        .lessons-list {
          margin-bottom: 20px;
        }

        .lesson-item {
          display: flex;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid #f3f4f6;
        }

        .lesson-item:last-child {
          border-bottom: none;
        }

        .lesson-number {
          font-weight: 600;
          color: #6b7280;
          margin-right: 15px;
          min-width: 25px;
        }

        .lesson-title {
          flex: 1;
          color: #374151;
        }

        .lesson-status {
          margin-left: 10px;
          font-weight: bold;
        }

        .lesson-status.completed {
          color: #10b981;
        }

        .lesson-status.pending {
          color: #6366f1;
        }

        .more-lessons {
          text-align: center;
          color: #6b7280;
          font-style: italic;
          padding: 10px 0;
        }

        .course-actions {
          display: flex;
          gap: 10px;
        }

        .continue-btn {
          flex: 1;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          text-align: center;
          transition: all 0.2s ease;
        }

        .continue-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
        }

        .notes-btn {
          background: #f3f4f6;
          color: #374151;
          border: none;
          padding: 12px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
          transition: background 0.2s ease;
        }

        .notes-btn:hover {
          background: #e5e7eb;
        }

        .additional-platforms {
          background: white;
          border-radius: 15px;
          padding: 30px;
          margin-top: 40px;
        }

        .additional-platforms h2 {
          text-align: center;
          color: #1f2937;
          margin-bottom: 25px;
        }

        .platforms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .platform-card {
          background: #f8fafc;
          padding: 20px;
          border-radius: 10px;
          text-decoration: none;
          color: #374151;
          transition: all 0.2s ease;
          border: 2px solid transparent;
        }

        .platform-card:hover {
          background: #e0e7ff;
          border-color: #6366f1;
          transform: translateY(-2px);
        }

        .platform-card h3 {
          margin: 0 0 8px 0;
          color: #1f2937;
          font-weight: 600;
        }

        .platform-card p {
          margin: 0;
          font-size: 0.9rem;
          color: #6b7280;
        }

        @media (max-width: 768px) {
          .courses-container {
            padding: 15px;
          }

          .courses-header h1 {
            font-size: 2rem;
          }

          .courses-grid {
            grid-template-columns: 1fr;
          }

          .category-filters {
            justify-content: flex-start;
            overflow-x: auto;
            padding-bottom: 10px;
          }

          .category-btn {
            flex-shrink: 0;
          }

          .course-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default ITCoursesSection;