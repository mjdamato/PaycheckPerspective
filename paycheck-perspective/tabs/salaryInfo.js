
//const uniqueItems = Array.from(new Set(jobData.map(job => job.jobTitle)));

const jobData = [
    { jobTitle: "Accountants and Auditors", medianSalary: 75713 },
    { jobTitle: "Actuaries", medianSalary: 129791 },
    { jobTitle: "Administrative Services Managers", medianSalary: 70082 },
    { jobTitle: "Advertising and Promotions Managers", medianSalary: 86690 },
    { jobTitle: "Advertising Sales Agents", medianSalary:  67398 },
    { jobTitle: "Aerospace Engineers", medianSalary: 112150},
    { jobTitle: "Agents and Business Managers of Artists, Performers, and Athletes", medianSalary: 80223},
    { jobTitle: "Chemical engineers", medianSalary: 112416 },
    { jobTitle: "Veterinary technologists and technicians", medianSalary: 35013},
    { jobTitle: "Tax examiners and collectors, and revenue agents", medianSalary: 56182},
    { jobTitle: "Software developers", medianSalary: 121001},
    { jobTitle: "Sales managers", medianSalary: 104544},
    { jobTitle: "Registered nurses", medianSalary: 74126},
    { jobTitle: "Psychiatric technicians", medianSalary: 36469},
        // Add more objects for each job title and median salary
  ];
const jobSelector = document.getElementById('jobSelector');
const selectedSalaryElement = document.getElementById('selectedSalary');

// Populate the dropdown options
jobData.forEach(job => {
    const option = document.createElement('option');
      option.value = job.jobTitle; // Use jobTitle as the value
     option.textContent = job.jobTitle;
     jobSelector.appendChild(option);
});

// Add event listener to the dropdown
jobSelector.addEventListener('change', function () {
      const selectedJobTitle = jobSelector.value;
      const selectedJob = jobData.find(job => job.jobTitle === selectedJobTitle);

      // Display the selected salary
      selectedSalaryElement.textContent = selectedJob ? `Median Salary: $${selectedJob.medianSalary}` : '';
});
