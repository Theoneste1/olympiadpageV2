        // Define district options based on province
        const districtOptions = {
            Eastern: ["Bugesera", "Gatsibo", "Kayonza", "Kirehe", "Ngoma", "Nyagatare", "Rwamagana"],
            Northern: ["Burera", "Gakenke", "Musanze", "Rulindo"],
            Southern: ["Gisagara", "Huye", "Kamonyi", "Muhanga", "Nyamagabe", "Nyaruguru", "Ruhango"],
            Western: ["Karongi", "Ngororero", "Nyabihu", "Nyamasheke", "Rubavu", "Rusizi", "Rutsiro"],
            // Add more provinces as needed
        };

        // Define sector options based on district
        const sectorOptions = {
            Bugesera: ["Bugesera", "Gashora", "Juru", "Nyamata", "Ntarama"],
            Gatsibo: ["Gatsibo", "Kabarore", "Kageyo", "Kiramuruzi", "Remera"],
            Kayonza: ["Kabare", "Kabarondo", "Murama", "Murundi", "Rukara"],
            Kirehe: ["Gatore", "Kigarama", "Kigina", "Mpanga", "Nasho"],
            Ngoma: ["Kibungo", "Mugesera", "Mutenderi", "Rurenge", "Sake"],
            Nyagatare: ["Gabiro", "Karangazi", "Katabagemu", "Kiyombe", "Matimba"],
            Rwamagana: ["Gishari", "Kabare", "Muhazi", "Musha", "Ndego"],

            Burera: ["Butaro", "Cyanika", "Cyeru", "Kagogo", "Rugarama"],
            Gakenke: ["Coko", "Cyabingo", "Gashenyi", "Mataba", "Muhondo"],
            Musanze: ["Busogo", "Cyuve", "Kinigi", "Muhoza", "Nkotsi"],
            Rulindo: ["Base", "Burega", "Bushoki", "Cyinzuzi", "Masoro"],

            Gisagara: ["Gikonko", "Kansi", "Kibirizi", "Mamba", "Muganza"],
            Huye: ["Gishamvu", "Karama", "Maraba", "Muganza", "Ngoma"],
            Kamonyi: ["Gacurabwenge", "Karama", "Kayenzi", "Mugina", "Musambira"],
            Muhanga: ["Cyeza", "Kabacuzi", "Kiyumba", "Muhanga", "Nyamabuye"],
            Nyamagabe: ["Buruhukiro", "Cyanika", "Gasaka", "Kaduha", "Kibirizi"],
            Nyaruguru: ["Busanze", "Cyahinda", "Kibeho", "Kivu", "Ngoma"],
            Ruhango: ["Bweramana", "Kinazi", "Kinihira", "Muhanga", "Nyanza"],

            Karongi: ["Bwishyura", "Gishyita", "Mubuga", "Muganza", "Murambi"],
            Ngororero: ["Bwira", "Kabaya", "Muhanda", "Ndaro", "Rambura"],
            Nyabihu: ["Bigogwe", "Jomba", "Jenda", "Mukamira", "Rurembo"],
            Nyamasheke: ["Bigogwe", "Karambi", "Kagano", "Mukamira", "Rusizi"],
            Rubavu: ["Bugeshi", "Burera", "Gisenyi", "Kanama", "Nyundo"],
            Rusizi: ["Bugarama", "Gihundwe", "Gitambi", "Kigeyo", "Mururu"],
            Rutsiro: ["Boneza", "Gihango", "Kigeyo", "Murunda", "Rwaniro"],
        };

        // Function to populate districts based on selected province
        function populateDistricts() {
            const provinceSelect = document.getElementById("school-province");
            const districtSelect = document.getElementById("school-district");
            const selectedProvince = provinceSelect.value;

            // Clear current options
            districtSelect.innerHTML = '<option value="">Select district...</option>';

            // Populate with new options based on selected province
            if (selectedProvince && districtOptions[selectedProvince]) {
                districtOptions[selectedProvince].forEach(function(district) {
                    const option = document.createElement("option");
                    option.text = district;
                    option.value = district;
                    districtSelect.appendChild(option);
                });
            }

            // Reset sectors when changing province
            const sectorSelect = document.getElementById("school-sector");
            sectorSelect.innerHTML = '<option value="">Select sector...</option>';
        }

        // Function to populate sectors based on selected district
        function populateSectors() {
            const districtSelect = document.getElementById("school-district");
            const sectorSelect = document.getElementById("school-sector");
            const selectedDistrict = districtSelect.value;

            // Clear current options
            sectorSelect.innerHTML = '<option value="">Select sector...</option>';

            // Populate with new options based on selected district
            if (selectedDistrict && sectorOptions[selectedDistrict]) {
                sectorOptions[selectedDistrict].forEach(function(sector) {
                    const option = document.createElement("option");
                    // Remove "Sector" from the sector name
                    const sectorName = sector.replace(/Sector/g, "").trim();
                    option.text = sectorName;
                    option.value = sectorName;
                    sectorSelect.appendChild(option);
                });
            }
        }
    